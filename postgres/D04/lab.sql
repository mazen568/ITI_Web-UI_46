--1 
select first_name || ' ' || last_name as full_name,coalesce(nationality,'unknown') as nationality
from students;

--2
select first_name || ' ' || last_name as full_name , nullif(gpa,0.0) gpa
from students;

--3
select first_name || ' ' || last_name as full_name,coalesce(nullif(gpa, 0.0)::text, 'not evaluated') as gpa
from students;

--bonus
select dept_name,
count(student_id) as student_count,coalesce(sum(gpa) / nullif(count(students.*), 0),0) as avg_gpa
from departments 
join students  
on departments.dept_id = students.dept_id
group by dept_name;


--4
create temp table temp_course_stats as
select course_code, course_name, count(enrollments.*) as enrolled_count, avg(grade) as avg_grade
from courses
join enrollments 
on courses.course_id=enrollments.course_id
group by course_code, course_name;

select *
from temp_course_stats
where avg_grade > 75;



--5
create index idx on students(dept_id);


--6
create unique index idx2 on students(email);


insert into students(first_name,last_name,email,dept_id,enroll_date)
values ('ahmed','hassan','ahmed.hassan@student.edu',1,current_date);



--7
create index idx3 on professors(salary)
where is_active=true;



--8
create view v_student_details as
select student_id, first_name || ' ' || last_name as full_name, email, gpa, dept_name, faculty_name, students.dept_id
from students 
join departments
on students.dept_id = departments.dept_id 
join faculties
on departments.faculty_id = faculties.faculty_id;


select *
from v_student_details
where dept_id = 3;


--9
create table enrollment_audit (
    audit_id serial primary key,
    student_id int,
    old_grade numeric,
    new_grade numeric,
    changed_at date ,
    changed_by text
);


create or replace function log_grade()
returns trigger as $$
begin
if old.grade is distinct from new.grade then
insert into enrollment_audit(student_id,old_grade,new_grade)
values(old.student_id,old.grade,new.grade);
end if;
return new;
end;
$$ language plpgsql;


create trigger trg_grade
before update on enrollments
for each row
execute function log_grade();


--10
update enrollments
set grade = 50
where enrollment_id = 1;

select * from enrollment_audit;


--11
create or replace function check_salary()
returns trigger as $$
begin
if new.salary is null or new.salary < 5000
then new.salary=5000;
end if;
return new;
end;
$$ language plpgsql;


create trigger trg_salary_check
before insert on professors
for each row
execute function check_salary();


INSERT INTO professors (first_name, last_name, email, salary) 
VALUES ('Mohamed', 'Hassan', 'm.hassan@university.edu', 3000);

SELECT * FROM professors WHERE first_name='Mohamed' and last_name = 'Hassan';


--12
create table if not exists salary_log ( 
  log_id     serial primary key, 
  prof_id    integer, 
  old_salary numeric, 
  new_salary numeric, 
  changed_by text, 
  changed_at timestamptz 
);



begin;

update professors
set salary = salary * 1.1
where dept_id = 1;

insert into salary_log(prof_id, old_salary, new_salary)
select prof_id, salary / 1.1, salary
from professors
where dept_id = 1;

commit;


select prof_id, salary
from professors
where dept_id = 1;

select *
from salary_log
where prof_id in (
    select prof_id from professors where dept_id = 1
);


--13
begin;
delete from enrollments
where student_id=1;
rollback;


select * from enrollments where student_id = 1;


--14

select faculty_id, budget
from faculties
where faculty_id in (1, 2);

begin;
update faculties
set budget = budget + 500000
where faculty_id = 1;

savepoint sp1;

update faculties
set budget = budget + 500000
where faculty_id = 2;

rollback to sp1;

commit;



--15
create role uni_readonly;

grant select on all tables in schema public to uni_readonly;


set role uni_readonly;


select * from students;

insert into students (first_name) values ('Mazen');

reset role;


--16
create role uni_readwrite;
grant select, insert, update, delete on all tables in schema public to uni_readwrite;

set role uni_readwrite

revoke delete on students from uni_readwrite;


revoke all privileges on students from uni_readwrite;

set role uni_readwrite;

select * from students;

reset role;





