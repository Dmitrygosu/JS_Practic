class MyNumber {
    constructor(value) {
        this.value = value;
    }

    plus(num) {
        return new MyNumber(this.value + num);
    }

    toString() {
        return this.value.toString();
    }
}

const num = new MyNumber(1);
const result = num.plus(2);
console.log(result.toString()); 

//��� ���������� ����� MyNumber, �������������� �����, � ������� plus ��� �������� �����.
//����� ������ plus ���������� ����� ��������� MyNumber, � ����� toString ����������� ����� � ������.

//��������� ���������� ����: 3 