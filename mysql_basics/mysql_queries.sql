Place your queries below

-- Feature Set 1
-------------------------------------------------------
--Select all students with username jayosas
SELECT * FROM `students_` WHERE `username`='jayosas'

--Update name for student with username jayosas
UPDATE `students_` SET `Name`='Johnny' WHERE username='jayosas'

--Insert new student into DB
INSERT INTO `students_` SET `username`='Yaeri', `email`='Yaeri@email.com', `password`=sha1('thisisagreatpassword')

--Delete student from DB
DELETE FROM `students_` WHERE username='Yaeri'

-- Feature Set 2
--------------------------------------------------------
--Select all to-do items from user_id 2
SELECT * FROM `todo_items` WHERE user_id='2'

--Insert new to-do item into DB
INSERT INTO `todo_items`(`id`, `title`, `details`, `timestamp`, `user_id`) VALUES (null, 'take shower', 'use shampoo','2', '5')

--Delete to-do item from DB
DELETE FROM `todo_items` WHERE `title`='take shower'

--Update details of to-do tasks for user id 8
UPDATE `todo_items` SET `details`='do your best' WHERE user_id='8'

--Select all info from users(students_) for id 1
SELECT * FROM `students_` WHERE id = 1
