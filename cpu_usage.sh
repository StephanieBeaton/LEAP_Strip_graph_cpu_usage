#!/bin/sh
mpstat | tail -1 | awk {'print "user: " $4+$5 "% syst: " $6+$8+$9+$10+$11+$12 "% wait: " $7 "% idle: " $13 "%   Total: " $4+$5+$6+$7+$8+$9+$10+$11+$12+$13 "%"}'
