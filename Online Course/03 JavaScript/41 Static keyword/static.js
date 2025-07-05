class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
}

const MathUtil1 = new MathUtil();
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));

// no need na mag => const obj = new MathUtil();
// console.log(obj.PI);
