<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Gold Rhino</title>
        <link rel="stylesheet" href="foundation-emails.css" />
        <style>
            body,
            html,
            .body {
                background: #f3f3f3 !important;
            }
            .container.header {
                background: #f3f3f3;
            }
            .body-border {
                border-top: 8px solid #663399;
            }
        </style>
    </head>
    <body>
        <table class="body" data-made-with-foundation="">
            <tr>
                <td class="float-center" align="center" valign="top">
                    <center data-parsed="">
                        <table class="spacer float-center">
                            <tbody>
                                <tr>
                                    <td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" class="container body-border float-center">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="spacer">
                                            <tbody>
                                                <tr>
                                                    <td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="row">
                                            <tbody>
                                                <tr>
                                                    <th class="small-12 columns first">
                                                        <table>
                                                            <tr>
                                                                <th>
                                                                    <p> <strong>First name:</strong><br> <?php echo $data->firstName; ?> </p>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </td>
            </tr>
        </table>
    </body>
</html>