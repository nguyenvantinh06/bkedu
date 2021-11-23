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

const detailSubmitSchema = Yup.object().shape({
    mark: Yup.number()
        .typeError('Nhập số điểm')
        .min(0, 'Điểm tối thiểu 0')
        .max(10, 'Điểm tối đa 10')
        .required('Vui lòng nhập điểm'),
    comment: Yup.string()
        .max(50, 'Quá dài')
});

const NotificationSchema = Yup.object().shape({
    notification: Yup.string()
    .max(100, 'Quá dài')
    .required('Bắt buộc'),
});

const createAssignmentSchema = Yup.object().shape({
    descAssignment: Yup.string()
    .max(50, 'Quá dài')
    .required('Bắt buộc'),
});

export {AddStudentSchema, createClassSchema, detailSubmitSchema, NotificationSchema, createAssignmentSchema}