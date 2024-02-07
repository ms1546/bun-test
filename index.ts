import { $ } from "bun";

// メモリ使用量をチェックする
console.log("Memory Usage:", await $`vm_stat`);

// CPU使用率をチェックする
console.log("CPU Usage:", await $`top -l 2 -n 0 -stats cpu | tail -n 1`);
