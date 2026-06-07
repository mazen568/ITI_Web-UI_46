-- intersect
select emp_id,first_name 
from employees
where dept_id=1;
intersect
select emp_id,first_name 
from employees
where salary>85000;

-- except
select emp_id,first_name fomr employees
from employees
except
select e.emp_id,e.first_name 
from employees e
join employee_projects ep
on e.emp_id = ep.emp_id



-- all(all must be true)/any(at least one is true)
select first_name , last_name , salary
from employees
where salary any (
select avg(salary) 
from employees
group by dept_id
)

select first_name , last_name , salary
from employees
where salary all (
select avg(salary) 
from employees
group by dept_id
)


-- insert from select
insert into salary_history (emp_id , salary , new_salary , changed_by)
values(............................)

insert into salary_history (emp_id , old_salary , new_salary , changed_by)
select emp_id , salary , salary*1.10 , 'ahmed'
from employees
where emp_id = 1;

-- insert with return
insert into projects(project_name , start_date , budget , status , dept_id)
values ('AI','2025-05-01', 300000 , 'planning' , 1)
returning project_id , project_name;

-- update with return
update employees
set salary=salary*1.10
where dept_id=3
returning  emp_id , first_name , salary;
-- delete with return
delete from salry_history
where emp_id = 1
returning emp_id;


 -- how to deal with conflicts :
insert into departments (dept_name , location)
values('engineering','cairo')
on conflict (dept_id) do nothing

insert into employees (emp_id , first_name , last_name , salary , email , hire_date, dept_id)
values(1,'ahmed','ali',500000,'a@a.com','2020-01-02',1)
on conflict (emp_id) do update 
set salary = excluded.salary , updated_at = now();
--excluded gets the value i am trying to insert(50000 in that case)
  
  
-- Merge
merge into employees as target
using(values (9,'test ' , 'user ' , 'test@iti.com' , 50000 , 1))
as source (emp_id , first_name , last_name , email , salary , dept_id)
on target.emp_id = source.emp_id
when matched then
update set salary = source.salary
when not matched then
insert (emp_id , first_name , last_name , email , salary , dept_id)
values (source.emp_id , source.first_name , source.last_name , source.email , source.salary , source.dept_id);

-- copy
-- create new table from query result:
select emp_id , first_name , last_name , salaru , dept_id
into engineering_employees
from employees
where dept_id =  1 ;

select * from engineering_employees;

drop table if exists engineering_employees;

-- report (just like select into) 
create table dept_summary as 
select d.dept_id , d.dept_name , count(e.emp_id) as head_count , avg(e.salary) , sum(e.salary)
from departments d 
left join employees e
on d.dept_id = e.dept_id
group by d.dept_id , d.dept_name;

select * from dept_summary



-- create table from table with no data (structure)
--1
create table employees_backup as 
select * from employees with no  data;
--2
create table engineering_employees as
select * from employees where false;

-- 3 using like (data + structure + constraints + indexes + defaults)
create table copy_2 (like emplpyees including all);


-- partial copy
-- create table to only high earners
create table high_earners as 
select * from employees
where salary > 1000000;

select * from high_earners;



-- type casting
select '2024-05-06' ::date;
select '55' ::integer;
select 42 ::text;

select cast('3.14' as numeric);



-- constraints
/*
1. primary key
2. foriegn key
3. unique
4. not null
5. check
6. exclude
*/


-- json , jsonb , array
update employees set 
metadata = '{
"skills":["python","html","css"],
"certifications":["AWS","AZURE"],
"emergency_contacts" : {"name":"ali","phone";"0100010101"},
"years":8
}'
where emp_id=1;



select metadata -> 'skills' from employees where emp_id=1;
 


-- variables

do $$ -- all code as one block
declare -- this is for declaring variables
v_count integer; -- var with no value
v_dept_name text :='engineering'; -- initialization
c_tax_rate constant numeric :='.15'; -- constant variable

begin 
select count(*) into v_count from employees where dept_id = 1 ;

raise notice 'dept number 1 named % , has % employees , and its tax rate is % ' ,v_dept_name , v_count , c_tax_rate;

end;

$$;

-- enum
create type emp_level as enum('junior','senior','lead');
create type days_of_weak as enum('sat','sun','mon','tue','wed','thu','fri');

alter table employees add column level emp_level default 'junior';

update employees 
set level = 'senior'
where salary between 85000 and 100000;

update employees 
set level = 'lead'
where salary > 100000;



-- composite type
create type address as (
street text,
city text,
country text
);



create table employees_addresses (
id integer,
home address,
work address
);

insert into employees_addresses values
(
1,
row('1234','cairo','egypt'),
row('5678','giza','egypt')
);

select * from employees_addresses;


select (home).city from employees_addresses;
select (work).country from employees_addresses;













