function logExecutionTime(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.time(name);
        const result = originalMethod.apply(this, args);
        console.timeEnd(name);
        return result;
    };
    return descriptor;
}

class MyClass {
    @logExecutionTime
    expensiveOperation() {
        return 100 + 300;
    }
}

const instance = new MyClass();
instance.expensiveOperation();
