--1
insert into faculties (faculty_name,dean,building,budget)
values ('faculty of law','dr.hany aziz','G',800000)
returning faculty_id;

--2
update professors
set salary=salary*1.15
where dept_id=3
returning first_name , salary/1.15 as old_salary, salary as new_salary;


--3
update students 
set is_active=false
where gpa < 2 and enroll_date < '2022-01-01'
returning first_name || ' ' || last_name as full_name;

--4
insert into enrollments (student_id, course_id, semester, year)
values (5, 1, 'fall', 2023)
on conflict (student_id, course_id, semester, year) do nothing;

-- select * from enrollments
-- where student_id=5 and course_id=1;

--5
update enrollments
set grade = 98, letter_grade = 'A+'
where student_id = 1 and course_id = 3 and semester = 'fall' and year = 2022;

--6
merge into students as target
using (values (99, 'mazen', 'raafat', 'mazen@test.com', 3, '2026-01-01'::date))
as source (student_id, first_name, last_name, email, dept_id, enroll_date)
on target.student_id=source.student_id
when matched then
update set address = 'new address'
when not matched then
insert (student_id, first_name, last_name, email, dept_id, enroll_date)
values (source.student_id, source.first_name, source.last_name, source.email, source.dept_id, source.enroll_date);

--7
select * into high_gpa_students
from students
where gpa>=3.5;

-- select * from high_gpa_students;


--8
create table dept_summary as
select dept_name,count(*) as student_count, avg(gpa) as avg_gpa , sum(amount) as total_scholarship
from departments join students 
on departments.dept_id = students.dept_id join scholarships 
on students.student_id = scholarships.student_id
group by dept_name;


-- select * from dept_summary;


--9
create table enrollments_1 as
select * from enrollments with no data;

-- select * from enrollments_1;
create table enrollments_copy (like enrollments including all);
insert into enrollments_copy
select * from enrollments;

-- select * from enrollments_copy;

--10
create table exam_results (
    id serial primary key,
    status text default 'pending',
    score numeric default 0,
    exam_date date default current_date,
    created_by text default current_user
);

insert into exam_results default values;


insert into exam_results (status, score,exam_date, created_by)
values ('completed', 95 ,'2025-01-01','mazen');

-- select * from exam_results;

--11
select 
first_name, metadata->'hobbies'->>0 as hobby,
jsonb_array_length(metadata->'languages') as number_of_languages,  
metadata->'laptop' as laptop
from students
where metadata is not null;


--12
create type student_level as enum('freshman','sophomore','junior','senior');

alter table students add column level student_level;

update students
set level = 'senior' 
where gpa > 3.7;

update students
set level = 'junior' 
where gpa > 3.0 and gpa < 3.7;

update students
set level = 'sophomore' 
where gpa > 2.0 and gpa < 3.0;

update students
set level = 'freshman' 
where gpa < 2.0;



--13
create type contact_info as (phone text, email text, city text);


create table student_contacts (
    student_id integer,
    contact contact_info
);

insert into student_contacts (student_id, contact)
values (
    1,
    row('11111111', 'mazen@gmail.com', 'cairo')
);




