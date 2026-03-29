-- public.users 테이블 생성
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- RLS 활성화
alter table public.users enable row level security;

-- 본인 데이터만 조회 가능
create policy "Users can view their own profile"
  on public.users for select
  using (auth.uid() = id);

-- 본인 데이터만 수정 가능
create policy "Users can update their own profile"
  on public.users for update
  using (auth.uid() = id);

-- auth.users에 새 유저가 생성될 때 public.users에 자동 삽입하는 함수
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.users (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

-- auth.users INSERT 시 트리거 실행
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
