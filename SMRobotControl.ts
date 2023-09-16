// Add your code here

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace SMRobotControl {
    
    //% block="print Something with $s"
    export function printSomething(s: string): void {
        basic.showString(s);
    }

    //% block="set custome pin1 $speed1 and pin3 $speed2"
    export function setPins(speed1: number, speed2: number): void {
        pins.analogWritePin(AnalogPin.P0, speed1);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, speed2);
        pins.analogWritePin(AnalogPin.P3, 0);
    }

    //% block="Steer Left $input"
    export function steerLeft(input: number): void {
        pins.analogWritePin(AnalogPin.P0, input*0.7);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, input);
        pins.analogWritePin(AnalogPin.P3, 0);
    }

    //% block="Steer Right $input"
    export function steerRight(input: number): void {
        pins.analogWritePin(AnalogPin.P0, input);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, input * 0.7);
        pins.analogWritePin(AnalogPin.P3, 0);
    }

    //% block="Forward with speed $speed"
    export function forwardWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, speed);
        pins.analogWritePin(AnalogPin.P3, 0);
    }

    //% block="Reverse with speed $speed"
    export function reverseWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, speed);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.analogWritePin(AnalogPin.P3, speed);
    }

    //% block="Rotate Clockwise with speed $speed"
    export function rotateClockwiseWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, speed);
        pins.analogWritePin(AnalogPin.P2, 0-speed);
        pins.analogWritePin(AnalogPin.P3, 0);
    }

    //% block="Rotate Anti-Clockwise with speed $speed"
    export function rotateAntiClockwiseWithSpeed(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.analogWritePin(AnalogPin.P3, 0-speed);
    }
}