import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // CREATE A USER OBJECT
  const userData: Partial<TUser> = {};

  // IF PASSWORD IS NOT GIVEN
  userData.password = password || (config.default_password as string);

  // SET STUDENT ROLE
  userData.role = 'student';

  // SET MANUALLY GENERATED ID
  userData.id = '2030112';

  // CREATE A USER
  const newUser = await User.create(userData);

  // CREATE A STUDENT
  if (Object.keys(newUser).length) {
    // SET ID, _ID AS USER
    studentData.id = newUser.id;
    studentData.user = newUser._id; // REFFERENCE ID

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
