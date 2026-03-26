const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

async function executar() {
  try {
    const pasta = path.join(__dirname, 'storage');
    const arquivo = path.join(pasta, 'aula05.txt');

    console.log(chalk.blue('Iniciando aplicação...'));

    // Verifica se a pasta existe
    try {
      await fs.access(pasta);
      console.log(chalk.yellow('Pasta storage já existe.'));
    } catch {
      await fs.mkdir(pasta);
      console.log(chalk.green('Pasta storage criada com sucesso!'));
    }

    const conteudo = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

    await fs.writeFile(arquivo, conteudo);
    console.log(chalk.green('Arquivo criado com sucesso!'));

    const dados = await fs.readFile(arquivo, 'utf-8');
    
    console.log(chalk.cyan('\nConteúdo do arquivo:'));
    console.log(chalk.white(dados));

    console.log(chalk.green('\nFinalizado com sucesso! 🚀'));

  } catch (erro) {
    console.log(chalk.red('Erro:'), erro);
  }
}

executar();

