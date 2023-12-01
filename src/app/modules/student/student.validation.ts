import { z } from "zod";

const GuardianValidationSchema = z
  .object({
    fatherName: z.string().nonempty().min(1).max(255).optional(),
    fatherOccupation: z.string().nonempty().min(1).max(255).optional(),
    fatherContactNo: z.string().nonempty().min(1).max(255).optional(),
    motherName: z.string().nonempty().min(1).max(255).optional(),
    motherOccupation: z.string().nonempty().min(1).max(255).optional(),
    motherContactNo: z.string().nonempty().min(1).max(255).optional(),
  })
  .nonstrict();

const LocalGuardianValidationSchema = z
  .object({
    name: z.string().nonempty().min(1).max(255).optional(),
    occupation: z.string().nonempty().min(1).max(255).optional(),
    contactNo: z.string().nonempty().min(1).max(255).optional(),
    address: z.string().nonempty().min(1).max(255).optional(),
  })
  .nonstrict();

const UserNameValidationSchema = z
  .object({
    firstName: z
      .string()
      .nonempty()
      .min(1)
      .max(20)
      .regex(/^[A-Z][a-z]*$/, { message: "First name should be capitalized" })
      .optional(),
    middleName: z.string().nonempty().min(1).max(255).optional(),
    lastName: z
      .string()
      .nonempty()
      .min(1)
      .max(255)
      .regex(/^[A-Za-z]+$/, {
        message: "Last name is not valid",
      }),
  })
  .nonstrict();

export const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: UserNameValidationSchema,
      gender: z.enum(["male", "female", "other"]),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloogGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      profileImg: z.string(),
    }),
  }),
});
