<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/resources/css/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display&display=swap" rel="stylesheet">
    <title>ButtonTest</title>
</head>
<body>
        <div class="ButtonConteiner">
        <button class="TestButton" onclick="PopUp('PopUp')">Кликни</button>
    </div>
    <div class="PopUpBackground hidden" id="PopUpBackground"></div>
    <div class="PopUpConteiner hidden" id="PopUpConteiner">
        <div class="PopUpBody" id="PopUpBody">
        <div class="descriptionContainer">
            <div class="head"> Получите набор файлов для руководителя:</div>
            <div class="ico">
                <div><img src="/resources/svg/doc.svg" alt="doc"></div>
                <div><img src="/resources/svg/xls.svg" alt="xls"></div>
                <div><img src="/resources/svg/pdf.svg" alt="pdf"></div>
                <div><img src="/resources/svg/pdf.svg" alt="pdf"></div>
                <div><img src="/resources/svg/pdf.svg" alt="pdf"></div>
                <div><img src="/resources/svg/pdf.svg" alt="pdf"></div>
                <div><img src="/resources/svg/pdf.svg" alt="pdf"></div>
            </div>
            <div class="img">
                <div><img src="/resources/svg/img.svg" alt="img"></div>
            </div>
            <button class="X" onclick="PopUp('PopUp')"><img src="/resources/svg/x.svg" alt="close"></button>
        </div>
        <div class="formContainer">
        <form action="amo/amo.php" method="post">
            <label for="email">Введите Email для получения файлов:</label>
            <input name="email" id="email" type="text" placeholder='E-mail'>
            <label for="phone">Введите телефон для подтверждения доступа:</label>
            <input name="phone" id="phone" class="phone" type="text" placeholder='+7 (000) 00-00-00'>
            <button disabled type="submit" name="SubmitButton" id ="SubmitButton" class="SubmitButton disablePhone disableEmail" onclick="PopUp()">
        Скачать файлы <img src="/resources/svg/fing.svg">
            </button>
            <?php $fileInfo = "PDF 4,7 MB      DOC 0,8 MB      XLS 1,2 MB"?>
            <div class="FileInfo"><?php echo $fileInfo?></div>
        </form>
        </div>
    </div>
    </div>
</body>
    <script src="/resources/js/index.js"></script>
</html>