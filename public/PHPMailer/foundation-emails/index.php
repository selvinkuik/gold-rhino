<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Gold Rhino</title>
  <link rel="stylesheet" href="foundation-emails.css" />
</head>

<body>
  <!-- <style> -->
  <table class="body" data-made-with-foundation>
    <tr>
      <td class="float-center" align="center" valign="top">
        <center>
          <table class="container">
            <tr>
              <td>
                <table class="row">
                  <tr>
                    <td>
                      <table class="row">
                        <tr>
                          <th class="small-12 large-6 first columns">
                            First name:
                          </th>
                          <th class="expander">
                            <?php echo $data->firstName ?? null; ?>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </center>
      </td>
    </tr>
  </table>
</body>
</html>
