<?php

header('Content-Type: application/pdf');
header('Content-disposition: attachment; filename=Gold Rhino Presentation.pdf;');
readfile('Gold Rhino Presentation.pdf');