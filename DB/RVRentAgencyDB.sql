 -- Create database
create database RVRentAgencyDB;
-- Start DB
USE RVRentAgencyDB;

--============================================================
-- Create the tables--

CREATE TABLE rentrv(
	rentid int IDENTITY(1,1) primary key NOT NULL,
	category varchar(255) NOT NULL,
	model varchar(255) NOT NULL
	);

		--=============== INSERT DATA ================
insert into rentrv (category, model) values ('Blablacar', 'M5RecodProstata');
select * from rentrv





--=================================================================
CREATE TABLE buyrv(
	buyid int IDENTITY(1,1) primary key NOT NULL,
	category varchar(255) NOT NULL,
	model varchar(255) NOT NULL
);

--=============== INSERT DATA ================
insert into buyrv (category, model) values ('MageRV','Comodore');
select * from buyrv;


--==================== DELETE DATA ====================
--delete 



-- =====================================
CREATE TABLE contact_us(
	contactid int IDENTITY(1,1) primary key NOT NULL,
	email varchar(255) NOT NULL,
	new_message varchar(255) NOT NULL,
);

--=============== INSERT DATA ================
insert into contact_us (email, new_message) values ('wally@flashow', 'I am the faster programming alivee');
select * from contact_us;





CREATE TABLE plan_trip(
	plan_tripid int IDENTITY(1,1) primary key NOT NULL,
	beginning_from varchar(255) NOT NULL,
	arriving_at varchar(255) NOT NULL,
	fk_rentid int null,
	fk_buyid int null,
	fk_contactid int null,
);

--=============== INSERT DATA ================
insert into plan_trip(beginning_from, arriving_at) values ('San Jose', 'Monte Rei');
select * from plan_trip;





--=============== Modify the tables =================
alter table plan_trip add constraint fk_rentid
foreign key (fk_rentid)
references rentrv (rentid)
on delete cascade;

alter table plan_trip add constraint fk_buyid
foreign key (fk_buyid)
references buyrv (buyid)
on delete cascade;

alter table plan_trip add constraint fk_contactid
foreign key (fk_contactid)
references contact_us (contactid)
on delete cascade;





--=============== INSERT INNERJOI ================
select pl.plan_tripid, pl.beginning_from, pl.arriving_at,
re.category, re.model,
bu.category, bu.model,
co.email, co.new_message from plan_trip as pl
inner join rentrv as re on pl.fk_rentid = re.rentid
inner join buyrv as bu on pl.fk_buyid = bu.buyid
inner join contact_us as co on pl.fk_contactid = co.contactid



--=============== INSERT DATA ================
insert into plan_trip (beginning_from, arriving_at, fk_rentid, fk_buyid, fk_contactid) 
values ('Starren City', 'Central City', 3, 6, 14);





--===========================================
-- To select a trable
select * from rentrv;
select * from buyrv;
select * from contact_us;
select * from plan_trip;











--========= NOT DROPED IT YOUR IDIOT ===================================
-- To delete a table
drop table rentrv;
drop table buyrv;
drop table contact_us;
drop table plan_trip;

use RVRentAgencyDB;

--== W471984wN250299n =====