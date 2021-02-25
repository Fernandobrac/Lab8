const formatVolumeIconPath = require("../assets/scripts/main");


describe('format icon volume tests', () =>{
    test('greater than 66', () => {
        expect(formatVolumeIconPath(80)).toContain('3');    //substring '3' must be in path 
    });
    
    test('between 33 and 66', () => {
        expect(formatVolumeIconPath(50)).toContain('2');    //substring '2' must be in path 
    });

    test('between 0 and 33', () => {
        expect(formatVolumeIconPath(15)).toContain('1');    //substring '1' must be in path 
    });

    test('exactly 0 edge case', () => {
        expect(formatVolumeIconPath(0)).toContain('0');     //substring '0' must be in path 
    });

    test('exactly 33 edge case', () => {
        expect(formatVolumeIconPath(33)).toContain('1');    //substring '1' must be in path 
    });

    test('exactly 66 edge case', () => {
        expect(formatVolumeIconPath(66)).toContain('2');    //substring '2' must be in path 
    }); 
});