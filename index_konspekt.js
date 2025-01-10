// Event (Hodisalar)
// Event: Brauzer yoki foydalanuvchi tomonidan amalga oshirilgan harakatlar (masalan, tugmani bosish, sahifani yuklash).
// Event listener: JavaScriptda hodisalarni eshitib, ularga javob beradigan funktsiyalarni yozish uchun ishlatiladi.

// addEventListener(): Elementga hodisa qo'shish uchun foydalaniladi.
// document.getElementById('myButton').addEventListener('click', function() {
//     alert('Button clicked!');
//   });

// DOM (Document Object Model)
// DOM: HTML yoki XML hujjatini tuzilgan obyektlar shaklida ifodalaydi va JavaScript orqali manipulyatsiya qilish imkonini beradi.
// DOM Manipulation: JavaScript orqali elementlarni yaratish, o'zgartirish yoki o'chirish.

// element olish
// document.getElementById('id');
// document.querySelector('.class');

// element yaratish
// let newDiv = document.createElement('div');
// document.body.appendChild(newDiv);

// Map va Set
// Map: Kalit-qiymat juftlarini saqlaydigan tuzilma. Kalitlar har qanday turda bo'lishi mumkin.

// let map = new Map();
// map.set('key', 'value');
// map.get('key'); // 'value'

// Map xususiyatlari: size, has(), delete(), clear(), forEach().

// Set: Unikal qiymatlarni saqlaydigan tuzilma. Takrorlanuvchi qiymatlarni saqlamaydi.

// let set = new Set();
// set.add(1);
// set.add(1); // faqat bitta 1 saqlanadi
// set.has(1); // true

// Set xususiyatlari: size, delete(), clear(), forEach().

// ES Modules (ES Modullari)
// ES Modules: JavaScriptda modullar yaratish va ularni import/export qilish uchun ishlatiladigan standart.
// Export: Funktsiya, o'zgaruvchi yoki obyektni boshqa fayllarda foydalanish uchun eksport qilish.

// fayl: myModule.js
// export function greet() {
//     console.log('Hello, world!');
//   }

// Import: Boshqa fayldan eksport qilingan narsalarni import qilish.

// // fayl: main.js
// import { greet } from './myModule.js';
// greet(); // Hello, world!

// Errors (Xatolar)
// Error turlari:
// SyntaxError: Sintaksisda xato bo'lsa yuzaga keladi.
// ReferenceError: Belgilangan o'zgaruvchi mavjud bo'lmaganda.
// TypeError: Noto'g'ri turdagi qiymat bilan operatsiya bajarilganda.
// Error Handling (Xatolarni boshqarish):
// try-catch: Xatolarni ushlash va ularga javob berish.

// try {
//     // Xato
//     let result = someUndefinedFunction();
//   } catch (error) {
//     console.error('Xato sodir bo'ldi:', error.message);
//   } finally {
//     console.log('Doim bajariladi.');
//   }
