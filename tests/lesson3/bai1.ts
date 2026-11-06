// Bai 1
//1. Viết một hàm nhận vào responseCode: string và dùng switch...case để trả về message mô tả lỗi chi tiết cho khách hàng. Nếu là mã lạ, trả về "Lỗi không xác định".
 let responseCode: string = "00"; 

switch (responseCode) {
    case "00":
        console.log ("Thành công");
        break;
    case "51":
        console.log ("Không đủ số dư");
        break;
    case "07":
        console.log ("Nghi vấn");
        break;
    case "09":
        console.log ("Thẻ chưa kích hoạt");
        break;
    default:
        console.log ("Lỗi không xác định: " + responseCode);
        break;
}

// 2. Duyệt danh sách rawResponses bằng vòng lặp for (hoặc for...of), sử dụng if...else để phân loại các giao dịch

let responseCode1: string [] = ["00", "51", "07", "09"]; 

for (let i:number =0; i< responseCode1.length; i++) {
    if (responseCode1[i] === "00") {
        console.log (responseCode1[i] + ": là trạng thái Success")
    }
    else if (responseCode1[i] === "07") {
        console.log (responseCode1[i] + ": là trạng thái Pending")
    }
    else {
        console.log (responseCode1[i] + ": là trạng thái FAILED")
    }
}

