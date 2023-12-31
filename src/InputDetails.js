export const InputDetails ={
    userUpDetails: [
        {
            id: 2,
            name: 'hoten',
            lable: 'Tên',
            type: 'text',
            placeholder: '',
            //required: true,
            //pattern: '^[A-Za-z0-9]{3,12}$',
            //errorMsg: 'Username should be 3-12 characters & should not include any special character!',
        },
        {
            id: 3,
            name: 'sdt',
            lable: 'SDT',
            type: 'text',
            placeholder: 'số điện thoại',
            //required: true,
            //pattern: '^[A-Za-z]{1,20}$',
            //errorMsg: 'Name is required!',
        },
        {
            id: 4,
            name: 'email',
            lable: 'Email',
            type: 'email',
            placeholder: 'example@email.com',
            //required: true,
            //errorMsg: 'Enter a valid email!',
        },
        {
            id: 6,
            name: 'diachi',
            lable: 'Address',
            type: 'text',
            placeholder: 'Address',
            //required: true,
            //errorMsg: 'Address is required!',
        },
        {
            id: 7,
            name: 'ngaysinh',
            lable: 'Ngày Sinh',
            type: 'text',
            placeholder: 'Address',
            //required: true,
            //errorMsg: 'Address is required!',
        },
    ],
    userInpDetails: [
        {
            id: 2,
            name: 'hoten',
            lable: 'Tên',
            type: 'text',
            placeholder: '',
            //required: true,
            //pattern: '^[A-Za-z0-9]{3,12}$',
            //errorMsg: 'Username should be 3-12 characters & should not include any special character!',
        },
        {
            id: 3,
            name: 'sdt',
            lable: 'SDT',
            type: 'text',
            placeholder: '',
            //required: true,
            //pattern: '^[A-Za-z]{1,20}$',
            //errorMsg: 'Name is required!',
        },
        {
            id: 4,
            name: 'email',
            lable: 'Email',
            type: 'email',
            placeholder: 'example@email.com',
            //required: true,
            //errorMsg: 'Enter a valid email!',
        },
        {
            id: 5,
            name: 'password',
            lable: 'Password',
            type: 'password',
            placeholder: 'Password',
            //required: true,
            //pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
            errorMsg:
                'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
        },
        {
            id: 6,
            name: 'diachi',
            lable: 'Địa chỉ',
            type: 'text',
            placeholder: 'Address',
            //required: true,
            //errorMsg: 'Address is required!',
        },
        {
            id: 7,
            name: 'ngaysinh',
            lable: 'Ngày Sinh',
            type: 'text',
            placeholder: 'Address',
            //required: true,
            //errorMsg: 'Address is required!',
        },
    ],
    orderInpDetails: [
        {
            id: 2,
            name: 'madh',
            lable: 'Mã đơn hàng',
            type: 'text',
            placeholder: '',
        },
        {
            id: 3,
            name: 'makh',
            lable: 'Mã khách hàng',
            type: 'text',
            placeholder: '',
        },
        {
            id: 4,
            name: 'tongtrigia',
            lable: 'Tổng trị giá',
            type: 'number',
            placeholder: 0,
        },
    ],
    employeeUpDetails: [
        {
            id: 2,
            name: 'name',
            lable: 'Tên',
            type: 'text',
            placeholder: 'tên',
            //required: true,
            //pattern: '^[A-Za-z0-9]{3,12}$',
            //errorMsg: 'Username should be 3-12 characters & should not include any special character!',
        },
        {
            id: 3,
            name: 'phone',
            lable: 'SDT',
            type: 'text',
            placeholder: 'sdt',
            //required: true,
            //pattern: '^[A-Za-z]{1,20}$',
            //errorMsg: 'Name is required!',
        },
        {
            id: 4,
            name: 'email',
            lable: 'Email',
            type: 'email',
            placeholder: 'example@email.com',
            //required: true,
            //errorMsg: 'Enter a valid email!',
        },
        // {
        //     id: 5,
        //     name: 'password',
        //     lable: 'Password',
        //     type: 'password',
        //     placeholder: 'Password',
        //     //required: true,
        //     //pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
        //     errorMsg:
        //         'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
        // },
        {
            id: 6,
            name: 'role',
            lable: 'Chức vụ',
            type: 'text',
            placeholder: 'role',
            //required: true,
            //errorMsg: 'Address is required!',
        }

    ],
    employeeInpDetails: [
        {
            id: 2,
            name: 'name',
            lable: 'Tên',
            type: 'text',
            placeholder: 'tên',
            //required: true,
            //pattern: '^[A-Za-z0-9]{3,12}$',
            //errorMsg: 'Username should be 3-12 characters & should not include any special character!',
        },
        {
            id: 3,
            name: 'phone',
            lable: 'SDT',
            type: 'text',
            placeholder: 'sdt',
            //required: true,
            //pattern: '^[A-Za-z]{1,20}$',
            //errorMsg: 'Name is required!',
        },
        {
            id: 4,
            name: 'email',
            lable: 'Email',
            type: 'email',
            placeholder: 'example@email.com',
            //required: true,
            //errorMsg: 'Enter a valid email!',
        },
        {
            id: 5,
            name: 'password',
            lable: 'Password',
            type: 'password',
            placeholder: 'Password',
            //required: true,
            //pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
            errorMsg:
                'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
        },
        {
            id: 6,
            name: 'role',
            lable: 'Chức vụ',
            type: 'text',
            placeholder: 'role',
            //required: true,
            //errorMsg: 'Address is required!',
        }
        
    ],
    productInpDetails : [
        {
            id: 2,
            name: 'name',
            lable: 'Tên Vật Liệu',
            type: 'text',
            placeholder: 'Tên Vật Liệu',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 3,
            name: 'age',
            lable: 'Tuổi Vật Liệu',
            type: 'number',
            placeholder: 'Tuổi Vật Liệu',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 4,
            name: 'description',
            lable: 'Mô Tả',
            type: 'text',
            placeholder: 'Mô Tả',
            required: false,
            errorMsg: 'Required!',
        }
        
        
    ],
    damageInpDetails : [
        {
            id: 2,
            name: 'content',
            lable: 'Nội dung báo cáo',
            type: 'text',
            placeholder: 'Nội dung báo cáo',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 3,
            name: 'cause',
            lable: 'Lý do',
            type: 'text',
            placeholder: 'Lý do',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 4,
            name: 'bodyId',
            lable: 'Mã body',
            type: 'text',
            placeholder: 'BodyId',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 5,
            name: 'accountId',
            lable: 'Mã account',
            type: 'text',
            placeholder: 'accountId',
            required: false,
            errorMsg: 'Required!',
        }
        
        
    ],
    blogInputs: [
        {
            id: 1,
            name: 'title',
            lable: 'Title',
            type: 'text',
            placeholder: 'Blog title',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 2,
            name: 'description',
            lable: 'Description',
            type: 'text',
            placeholder: 'Blog description',
            required: true,
            errorMsg: 'Description is required!',
        },
        {
            id: 3,
            name: 'tags',
            lable: 'Tags',
            type: 'text',
            placeholder: 'Travel, Communication',
            required: true,
            errorMsg: 'Tag is required!',
        },
    ],
    promotionInputs: [
        {
            id: 2,
            name: 'apdung',
            lable: 'Mức áp dụng',
            type: 'number',
            placeholder: 'Mức áp dụng',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 3,
            name: 'phantramkm',
            lable: 'Phần trăm khuyến mãi',
            type: 'number',
            placeholder: 'Phần trăm khuyến mãi',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 4,
            name: 'batdau',
            lable: 'Thời gian bắt đầu',
            type: 'text',
            placeholder: 'Thời gian bắt đầu',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 5,
            name: 'ketthuc',
            lable: 'Thời gian kết thúc',
            type: 'text',
            placeholder: 'Thời gian kết thúc',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 6,
            name: 'title',
            lable: 'Tiêu đề',
            type: 'text',
            placeholder: 'Tiêu đề khuyến mãi',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 7,
            name: 'image',
            lable: 'Hình ảnh',
            type: 'text',
            placeholder: 'Hình ảnh',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 8,
            name: 'description',
            lable: 'Mô tả',
            type: 'text',
            placeholder: 'Mô tả',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 9,
            name: 'dateSource',
            lable: 'Ngày tạo',
            type: 'text',
            placeholder: 'Ngày tạo',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 10,
            name: 'detail',
            lable: 'Chi tiết',
            type: 'text',
            placeholder: 'Chi tiết',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 11,
            name: 'category',
            lable: 'Phân loại',
            type: 'text',
            placeholder: 'Khuyến mãi',
            required: true,
            errorMsg: 'Title is required!',
        },
    ],
    storeInputs: [
        {
            id: 2,
            name: 'name',
            lable: 'Tên cửa hàng',
            type: 'text',
            placeholder: 'Tên cửa hàng',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 3,
            name: 'provinceCode',
            lable: 'Mã tỉnh',
            type: 'number',
            placeholder: 'Mã tỉnh',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 4,
            name: 'districtCode',
            lable: 'Mã quận/huyện',
            type: 'number',
            placeholder: 'Mã quận/huyện',
            required: true,
            errorMsg: 'Title is required!',
        },
    ],
    guaranteeInputs: [
        {
            id: 2,
            name: 'mota',
            lable: 'Mô tả',
            type: 'text',
            placeholder: 'Mô tả',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 3,
            name: 'tinhtrangbaohanh',
            lable: 'Tình trạng bảo hành',
            type: 'text',
            placeholder: 'Tình trạng bảo hành',
            required: true,
            errorMsg: 'Title is required!',
        },
        {
            id: 4,
            name: 'ngbaohanh',
            lable: 'Ngày bảo hành',
            type: 'text',
            placeholder: 'Ngày bảo hành',
            required: true,
            errorMsg: 'Title is required!',
        }
    ],
    invoiceInputs: [
        {
            id: 2,
            name: 'makh',
            lable: 'Mã khách hàng',
            type: 'text',
            placeholder: 'Mã khách hàng',
            required: false,
            errorMsg: 'Makh is required!',
        },
        {
            id: 3,
            name: 'manv',
            lable: 'Mã nhân viên',
            type: 'text',
            placeholder: 'Mã nhân viên',
            required: false,
            errorMsg: 'manv is required!',
        },
        {
            id: 4,
            name: 'ngayxuathd',
            lable: 'Ngày xuất hóa đơn',
            type: 'text',
            placeholder: 'Ngày xuất hóa đơn',
            required: false,
            errorMsg: 'ngayxuathd is required!',
        },
        {
            id: 5,
            name: 'tinhtrang',
            lable: 'Tình trạng',
            type: 'text',
            placeholder: 'Tình trạng',
            required: false,
            errorMsg: 'tinhtrang is required!',
        },
        {
            id: 6,
            name: 'trigia',
            lable: 'Giá',
            type: 'number',
            placeholder: 'Trị giá',
            required: false,
            errorMsg: 'Price is required!',
        },
        {
            id: 7,
            name: 'diachigiaohang',
            lable: 'Địa chỉ giao hàng',
            type: 'text',
            placeholder: 'Địa chỉ giao hàng',
            required: false,
            errorMsg: 'This field is required!',
        },
        {
            id: 8,
            name: 'phuongthucthanhtoan',
            lable: 'Phương thức thanh toán',
            type: 'text',
            placeholder: 'Phương thức thanh toán',
            required: false,
            errorMsg: 'This field is required!',
        },
    ],
    bodyInputs: [
        {
            id: 2,
            name: 'name',
            lable: 'Name',
            type: 'text',
            placeholder: 'Name',
            required: false,
            errorMsg: 'Name is required!',
        },
        {
            id: 3,
            name: 'path',
            lable: 'Path',
            type: 'text',
            placeholder: 'Path',
            required: false,
            errorMsg: 'Path is required!',
        },
        {
            id: 4,
            name: 'color',
            lable: 'Màu sắc',
            type: 'text',
            placeholder: '#FAFAD2',
            required: false,
            errorMsg: 'Color is required!',
        }
    ],
    bodyRepairInputs: [
        {
            id: 2,
            name: 'startDate',
            lable: 'Ngày bắt đầu',
            type: 'text',
            placeholder: 'ngày bắt đầu',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 3,
            name: 'finishDate',
            lable: 'Ngày kết thúc',
            type: 'text',
            placeholder: 'Ngày kết thúc',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 4,
            name: 'repairReason',
            lable: 'Lý do sửa chữa',
            type: 'text',
            placeholder: 'Lý do',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 5,
            name: 'accountId',
            lable: 'Mã account',
            type: 'text',
            placeholder: 'accountId',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 6,
            name: 'damageReportId',
            lable: 'Mã báo cáo hư hại',
            type: 'text',
            placeholder: 'damageReportId',
            required: false,
            errorMsg: 'Required!',
        },
        {
            id: 7,
            name: 'bodyId',
            lable: 'Mã Body',
            type: 'text',
            placeholder: 'bodyId',
            required: false,
            errorMsg: 'Required!',
        }
    ]
}