#!/usr/bin/env deno --allow-all

import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";

test(function myTest() {
  throw new Error("Not implemented yet.");
});

runIfMain(import.meta);
