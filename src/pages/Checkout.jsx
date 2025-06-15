import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiBell } from "react-icons/fi";
import avatar from "../assets/avatar-man.png";
import logo from "../assets/ulm-care-logo.png";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ciImage from "../assets/ci.png";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-right" dir="rtl">
      {/* Navbar */}
      <header className="pt-[64px] bg-[#F9FAFB]">
        <nav className="w-full max-w-[1440px] mx-auto bg-white border-b border-[#FFFFFF]">
          <div className="h-[42px] px-[80px] flex items-center justify-between">
            <div className="flex items-center gap-[42px]">
              <div className="w-[131.54px]">
                <img src={logo} alt="Ulm Care Logo" className="h-[36px]" />
              </div>
              <div className="flex gap-4 text-[#6F6F6F] text-base">
                <span
                  onClick={() => navigate(-1)}
                  className="text-[#0798F1] font-semibold cursor-pointer hover:underline"
                >
                  الرئيسية
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>خدماتنا</span>
                  <FiChevronDown className="w-4 h-4 mt-1" />
                </div>
                <span>كونكت للأطباء</span>
                <span>الدعم</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-[#6F6F6F]">
                <FiBell className="w-6 h-6" />
                <FiShoppingCart className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <span>ENG</span>
                <FiChevronDown className="w-5 h-5" />
              </div>
              <img
                src={avatar}
                alt="Avatar"
                className="w-[42px] h-[42px] rounded-full object-cover"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] pt-6 text-right">
        <div className="text-sm text-[#4B4B4B] font-normal mb-[-4px]">
          &lt; الرجوع
        </div>
        <div className="text-[#222222] text-[24px] font-bold leading-[100%] mt-[6px]">
          الدفع
        </div>
      </div>

      {/* Content Container */}
      <main className="max-w-[1280px] mx-auto mt-6 p-4 md:p-8 flex flex-col lg:flex-row-reverse gap-[20px] bg-white rounded-xl shadow-sm">
        {/* Order Summary (Right in RTL) */}
        <div
          className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px] text-right"
          dir="rtl"
        >
          <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
            تفاصيل الطلب
          </h2>

          {/* Item */}
          <div className="flex items-start justify-between gap-4 border-b border-[#E5E5E5] pb-4 mb-4">
            {/* Quantity */}
            <span className="text-[#4B4B4B] text-[14px] mt-1 whitespace-nowrap">
              1x
            </span>

            {/* Image */}
            <img
              src={ciImage}
              alt="صورة الخدمة"
              className="w-[86px] h-[86px] object-contain rounded-[16px]"
            />

            {/* Text */}
            <div className="flex flex-col items-end flex-1 gap-[2px]">
              <p className="text-[16px] font-bold text-[#1C1C1C] leading-tight">
                جراحة الفم والأسنان
              </p>
              <p className="text-[14px] text-[#6F6F6F] leading-tight">
                إزالة التصبغات والبقع
              </p>
              <p className="text-[14px] text-[#6F6F6F] leading-tight">
                يتطلب الصيام
              </p>
            </div>

            {/* Price */}
            <div className="text-[16px] font-medium text-[#4B4B4B] whitespace-nowrap mt-1">
              250 JOD
            </div>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-sm text-[#6F6F6F] mb-2">
            <span>(%16) الضريبة</span>
            <span>35 JOD</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center p-4 bg-[#F3FAFF] rounded-[8px]">
            <div className="text-[16px] font-medium text-[#6F6F6F] text-right leading-snug">
              المبلغ المستحق
              <div className="text-[12px] text-[#B3B3B3] font-normal">
                شامل الضريبة
              </div>
            </div>
            <div className="text-[20px] font-bold text-[#0099FF]">285 JOD</div>
          </div>
        </div>

        {/* Form & Payment */}
        <section className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Saved Addresses */}
          <div
            className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px] text-right"
            dir="rtl"
          >
            <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
              عنوان الفواتير المحفوظة
            </h2>
            <div className="space-y-3">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className={`flex justify-between items-start gap-2 rounded-[8px] p-4 border text-sm
          ${
            i === 0
              ? "bg-[#F3FAFE] border-[#ADE4FF]"
              : "bg-white border-[#D8D8D8]"
          }`}
                >
                  {/* Icons */}
                  <div className="flex flex-col items-start gap-2 text-gray-400">
                    <button title="حذف">🗑️</button>
                    <button title="تعديل">✏️</button>
                  </div>

                  {/* Text info */}
                  <div className="flex-1 text-right">
                    <p className="font-bold text-sm text-[#1C1C1C]">
                      محمود محمد
                    </p>
                    <p className="text-gray-500 leading-5 mt-1">
                      شارع الملك فهد، حي الورود، الرياض، <br />
                      المملكة العربية السعودية
                    </p>
                    <p className="text-gray-400 mt-1 text-sm">11025</p>
                  </div>

                  {/* Select status */}
                  <div className="mt-1">
                    {i === 0 ? (
                      <div className="text-blue-500 text-xl">✔</div>
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Address Form */}
          <div
            className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px]"
            dir="rtl"
          >
            <h3 className="text-base font-semibold mb-6 text-[#1C1C1C]">
              إضافة عنوان جديد
            </h3>
            <form className="flex flex-col gap-4 text-sm text-right">
              {/* First Name */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  placeholder="أضف الاسم الأول"
                  className="w-full border border-[#D8D8D8] rounded-md p-3 text-right placeholder:text-gray-400"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الاسم الأخير
                </label>
                <input
                  type="text"
                  placeholder="أضف الاسم الأخير"
                  className="w-full border border-[#D8D8D8] rounded-md p-3 text-right placeholder:text-gray-400"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الدولة
                </label>
                <select
                  className="w-full border border-[#D8D8D8] rounded-md p-3 bg-white text-right text-gray-700"
                  defaultValue="الأردن"
                >
                  <option value="الأردن">الأردن</option>
                  <option value="السعودية">السعودية</option>
                  <option value="مصر">مصر</option>
                  <option value="الإمارات">الإمارات</option>
                  {/* Add more if needed */}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  المدينة
                </label>
                <input
                  type="text"
                  placeholder="أضف المدينة"
                  className="w-full border border-[#D8D8D8] rounded-md p-3 text-right placeholder:text-gray-400"
                />
              </div>

              {/* Street */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  اسم الشارع
                </label>
                <input
                  type="text"
                  placeholder="أضف العنوان بالتفصيل"
                  className="w-full border border-[#D8D8D8] rounded-md p-3 text-right placeholder:text-gray-400"
                />
              </div>

              {/* Zip Code */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الرمز البريدي
                </label>
                <input
                  type="text"
                  placeholder="أضف الرمز للمنطقة"
                  className="w-full border border-[#D8D8D8] rounded-md p-3 text-right placeholder:text-gray-400"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="text-blue-600 text-sm mt-2 hover:underline self-start"
              >
                حفظ
              </button>
            </form>
          </div>

          {/* Payment Method */}
          <div
            className="bg-white p-6 rounded-[24px] shadow-sm w-full max-w-[582px] text-right space-y-6"
            dir="rtl"
          >
            <h2 className="text-[20px] font-medium text-[#686767] leading-[100%]">
              اختر طريقة الدفع
            </h2>

            {/* Option 1: الدفع باستخدام البطاقة */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer">
              {/* ✅ Radio on Right */}
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500 ml-4"
              />

              <div className="flex items-center gap-3 flex-1 justify-between">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[#1C1C1C] text-[14px] font-normal">
                    الدفع باستخدام البطاقة
                  </span>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/48/visa.png"
                    alt="Visa"
                    className="w-[61px] h-[42px] object-contain"
                  />
                  <img
                    src="https://img.icons8.com/color/48/mastercard-logo.png"
                    alt="MasterCard"
                    className="w-[42px] h-[42px] object-contain"
                  />
                  <img
                    src="https://img.icons8.com/color/48/paypal.png"
                    alt="PayPal"
                    className="w-[42px] h-[42px] object-contain"
                  />
                </div>
              </div>
            </label>

            {/* Option 2: كاش */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500 ml-4"
              />
              <span className="text-[#1C1C1C] text-[14px] font-normal flex-1 text-right">
                الدفع كاش في نيو أولم
              </span>
            </label>

            {/* Option 3: تقسيط بنك */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500 ml-4"
              />
              <div className="flex flex-col items-end text-right flex-1">
                <span className="text-[#1C1C1C] text-[14px] font-normal">
                  دفع بالتقسيط عن طريق البنك
                </span>
                <span className="text-[#0798F1] text-[14px] font-medium">
                  من 10 إلى JOD 1,000
                </span>
              </div>
            </label>

            {/* Option 4: تقسيط موقع */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500 ml-4"
              />
              <div className="flex flex-col items-end text-right flex-1">
                <span className="text-[#1C1C1C] text-[14px] font-normal">
                  دفع بالتقسيط عن طريق الموقع
                </span>
                <span className="text-[#0798F1] text-[14px] font-medium">
                  من 1,000 إلى JOD 10,000
                </span>
              </div>
            </label>
          </div>
        </section>
      </main>

      {/* Payment Button */}
      <div className="w-full flex justify-center px-4 md:px-[80px] mt-8">
        <button className="w-full max-w-[400px] bg-[#0798F1] hover:bg-[#007dd1] text-white py-3 rounded-lg font-semibold text-sm">
          إتمام الدفع
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#0C1E2C] text-white py-10 px-4 md:px-[80px] text-sm mt-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">Ulm Care</h4>
            <p>
              تقديم خدمات طبية شاملة بأعلى معايير الجودة والاحترافية، لضمان
              الرعاية المتكاملة لك ولعائلتك.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">الشركة</h4>
            <ul className="space-y-1">
              <li>من نحن؟</li>
              <li>انضم لنا</li>
              <li>الدعم</li>
              <li>أسئلة شائعة</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">خدماتنا</h4>
            <ul className="space-y-1">
              <li>التحاليل الطبية</li>
              <li>العيادات</li>
              <li>الأشعة</li>
              <li>الأطباء</li>
              <li>الرعاية المنزلية</li>
              <li>المرافقة الصحية</li>
              <li>السياحة العلاجية</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">تواصل معنا</h4>
            <p>+962790098906</p>
            <p>info@ulmcare.jo</p>
            <p>Wasfi AlTal St. P.O. Box. 5873 Amman - 11953 Jordan</p>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-300 border-t border-gray-700 pt-4">
          جميع الحقوق محفوظة © New ULM®
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
