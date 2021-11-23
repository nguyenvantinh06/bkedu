import * as Yup from 'yup';
 
const AddStudentSchema = Yup.object().shape({
    email: Yup.string().email('Sai định dạng email').required('Bắt buộc'),
});

const createClassSchema = Yup.object().shape({
    subjectName: Yup.string()
        .min(6, 'Quá ngắn')
        .max(20, 'Quá dài')
        .required('Bắt buộc'),
    className: Yup.string()
        .min(2, 'Nhập tên lớp')
        .max(10, 'Quá dài')
        .required('Bắt buộc'),
});

export {AddStudentSchema, createClassSchema}