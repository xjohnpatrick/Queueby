//@/types
export interface DashboardUser {
  id: number,
    key: string;
    userId: string;
    fullName: string;
    address: string;
    contactNo: string;
    gender: string;
    age: string;
    purpose: string;
    status: string;
    date: string;
    officialReceipt: string;
  }

  export interface DatabaseUser {
    key: string;
    userId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    birthDate: string;
    gender: string;
    email: string;
    contactNo: string;
    noStreet: string;
    barangay: string;
    city: string;
  }