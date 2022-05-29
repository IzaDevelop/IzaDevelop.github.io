<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados do produto</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Produto cadastrado!</h1>
    </header>
    <main class="limitador">
        <?php
        $produto = $_POST['produto'];
        $fabricantes = $_POST['fabricantes'];
        $preco = $_POST['preco'];
        $quantidade = $_POST['quantidade'];
        $descricao = $_POST['mensagem'];

        $produto = filter_input(INPUT_POST, 'produto', FILTER_SANITIZE_SPECIAL_CHARS);

        $preco = filter_input(INPUT_POST, 'preco', FILTER_SANITIZE_NUMBER_FLOAT);

        $quantidade = filter_input(INPUT_POST, 'quantidade', FILTER_SANITIZE_NUMBER_INT);

        $descricao = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);
        ?>
        <h2>Dados:</h2>
        <ul>
            <li>Nome do produto: <?= $produto ?></li>
            <li>Fabricante: <?= $fabricantes ?></li>
            <li>Preço: <?= $preco ?></li>
            <li>Quantidade: <?= $quantidade ?></li>
            <li>Descrição: <?= $descricao ?></li>
        </ul>
        <br>
        <button href="index.php">Cadastrar um novo produto</button>
    </main>
    <footer>
        <p>Desenvolvido por Izabelle</p>
    </footer>
</body>

</html>