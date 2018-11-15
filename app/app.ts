import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("My World!!");

$("body").append(`greeting: ${hello.greeting()}`);
