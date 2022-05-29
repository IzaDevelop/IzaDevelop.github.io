<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de cadastro</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Cadastrar Produtos</h1>
    </header>
    <main>
        <form action="cadastrado.php" method="post" class="limitador">
            <p>
                <label for="produto">Nome do Produto:</label>
                <input required type="text" name="produto" id="produto" placeholder="Ex: Celular">
            </p>
            <p>
                <label for="fabricantes">Fabricante:</label>
                <select name="fabricantes" id="fabricantes">
                    <option value="" selected disabled>Selecione um fabricante</option>
                    <?php
                    $fabricantes = ["Samsung", "Iphone", "Xiome", "Asus"];
                    foreach ($fabricantes as $fabricante) {
                    ?>
                        <option value="<?= $fabricante ?>"><?= $fabricante ?></option>
                    <?php
                    }
                    ?>
                </select>
            </p>
            <p>
                <label for="preco">Preço:</label>
                <input type="number" name="preco" id="preco" min="100" max="10000" step=".01" placeholder="Ex: 100,05">
            </p>
            <p>
                <label for="quantidade">Quantidade:</label>
                <input type="number" name="quantidade" id="quantidade" min="0" max="50" placeholder="Ex: 15">
            </p>
            <p>
                <label for="mensagem">Descrição:</label><br>
                <textarea name="mensagem" id="mensagem" cols="30" rows="6"></textarea>
            </p>
            <button type="submit" name="enviar">Cadastrar</button>
        </form>
    </main>
    <footer>
        <p>Desenvolvido por Izabelle</p>
    </footer>
</body>

</html>