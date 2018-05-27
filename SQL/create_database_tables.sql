create database Hoteldb;
use Hoteldb;

Create table Customer ( Customer_ID INT, Customer_name_first TEXT, Customer_name_last TEXT, Cust_DOB DATE, Cust_Email TEXT, primary key (Customer_ID) );


Create table Customers_phone_number ( Customer_ID INT, Customer_phone TINYINT, foreign key(Customer_ID) references Customer(Customer_ID) on delete cascade );


Create table Accounts ( Customer_ID INT, Account_ID INT, Opening_date DATE, Account_username TINYTEXT, Account_pwd TINYTEXT, account_type CHAR(10), primary key (Account_ID), foreign key (Customer_ID) references Customer(Customer_ID) on DELETE cascade);



Create table Business ( Account_ID INT, Business_ID INT, Business_email TEXT, Business_weblink TEXT, Business_total_number_of_hotels_owned INT, primary key (Business_ID), foreign key (Account_ID) references Accounts(Account_ID) on delete cascade );

Create table Business_country ( Business_ID INT, Bus_Country INT, Bus_number_of_hotels INT, foreign key (Business_ID) references Business(Business_ID) on delete cascade );

Create table Business_phone_number ( Business_ID INT, Business_contact_number INT, foreign key (Business_ID) references Business(Business_ID) on delete cascade );




Create table Hotel ( Business_ID INT, Hotel_ID INT, Hotel_Name TEXT, Hotel_priceperroom INT, primary key (Hotel_ID), foreign key(Business_ID) references Business(Business_ID) on delete cascade );

Create table Hotel_Rooms ( Hotel_ID INT, Hotel_total_rooms INT, Hotel_rooms_booked INT, primary key(hotel_ID), foreign key(Hotel_ID) references Hotel(Hotel_ID) on DELETE cascade);

Create table Hotel_Address ( Hotel_ID INT, Street_number INT, street TEXT, suburb TEXT, post_code CHAR(10), foreign key (Hotel_ID) references Hotel(Hotel_ID) on DELETE cascade );



Create table Booking ( Account_ID INT, Hotel_ID INT, Booked_on_date DATE, Hotel_name TEXT, booking_start_date DATE, booking_end_date DATE, booking_location TEXT, primary key (Account_ID), foreign key(Account_ID) references Accounts(Account_ID) on DELETE cascade, foreign key (Hotel_ID) references Hotel(Hotel_ID) on DELETE no action );





