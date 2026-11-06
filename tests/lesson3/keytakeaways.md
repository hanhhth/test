1. Câu lệnh điều kiện If/else
- Logic khi điều kiện thỏa mãn thì nó thực thi
- If <điều kiện> { xxx} else {yyy}
- Sau if là dấu {} để biểu diễn trong block scope => chỉ thực thi trong block này 
- If có chứ điều kiện, else không chứa điều kiện 
- Kiểu viết khác của if/else 
<!-- let gender: string = "Male";

if (gender === "Male") {
  console.log("La con trai");
} else {
  console.log("Khac");
} -->
Tường đương: 
// gender === "Male" ? console.log("Là con trai") : console.log("La con gái");

- Đối với yêu cầu cần nhiều điều kiện ( 3 dk) thì sử dụng if/ else if/ else 
    If <điều kiện> {xxx}
    else if {yyy}
    else {zzz}
- Đối với yêu cầu từ 3 đk trở lên thì dùng Switch
    switch () {
        case "điều khiện1":
        console.log("");
        break;

        case "điều khiện2":
        console.log("");
        break;  
    }

- VÒng lặp for để loop:
for (điều kiện) {
xxx
}
VD: 
let paymentMothod: string[] =["QT", "NĐ", "QR", "VietQR"] 

//i++ = i= i+1
for (let i: number =0; i<=3; i++>) {
    console.log(paymentMethods[i]);
}
// Vòng 1: console.log(paymentMethods[0]); i=0; i<3; i=i+1=1
// Vòng 2: console.log(paymentMethods[1]); i=1; i<3; i=i+1=2
----
// Vòng 4: console.log(paymentMethods[3]); i=3; i<=3; i=i+1=4

=> Nên dùng length để linh hoạt lấy ra giá trị để ko fix cứng: dùng (let i:number =0; i< paymentMethods.length; i++)

//i-- => i=i-1 
=> cách 1 for (let i =3; i>=0; i--){}
=> Cách 2 for (let i = paymentMethods.length -1; i>=0; i--)
//Vòng 1: i=3 -> paymentMethods[3] = VietQR 
=> check i = 3 >0; 3-- <=> i =3-1=2
//Vòng 2: i=2 -> paymentMethods[2] = QR 
=> check i = 2 >0; 3-- <=> i =2-1=1
---
//Vòng 4: i=0 -> paymentMethods[0] = QT
=> check i = 0 = 0; 0-- <=> i =0-1=-1
// Vòng 5: i =-1; => -1>0 false => stop

Lưu ý:  xác định vị trí dừng. Đối với i-- => xxx.length -1 
Nếu i =0 thì duyệt từ 0; i=length thì duyệt từ cuối lên đầu 





