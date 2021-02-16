# Usuário

## Criação de usuários

**RequisitosFuncionais**

[ ] O usuário deve poder criar um usuário definindo os campos email;nome;senha;
[ ] O usuário deve receber um email com instruções de recuperação de senha
[ ] O usuário deve poder redefinir sua senha

**RequisitosNaoFuncionais**

[ ] Utilizar Mailtrap para testar os envios de email em ambiente de desenvolvimento
[ ] Utilizar o Amazon SES para envios em produção
[ ] O envio de emails deve acontecer em segundo plano (Background job)

**RegrasNegócio**
[ ] Verificar se o email e nome ja estão em uso;

## Atualização de perfil

**RequisitosFuncionais**
[ ] O usuário deve poder atualizar seu nome,email,senha,avatar

**RegrasNegócio**
[ ] O usuário nao pode alterar seu email para um email ja utilizado
[ ] Para atualizar sua senha, o usuário deve informar a sua senha antiga
[ ] Para atualizar sua senha, o usuário deve confirmar a nova senha

## Recuperação de senha

**RequisitosFuncionais**

[ ] O usuário deve poder recuperar a senha informando o seu email
[ ] O usuário deve receber um email com instruções de recuperação de senha
[ ] O usuário deve poder redefinir sua senha

**RequisitosNaoFuncionais**

[ ] Utilizar Mailtrap para testar os envios de email em ambiente de desenvolvimento
[ ] Utilizar o Amazon SES para envios em produção
[ ] O envio de emails deve acontecer em segundo plano (Background job)

**RegrasNegócio**
[ ]
[ ] O link enviado por email para redefinir senha, deve expirar em 2h
[ ] O usuário precisa confirmar a nova senha ao redefinir

# Tweet

## Publicação de Tweet

**RequisitosFuncionais**

[ ] O usuário deve poder publicar um tweet com descrição/vídeo/img

**RegrasNegócio**
[ ] O Tweet deve estar atrelado ao usuário logado
[ ] A descrição não pode conter mais de **280** caracteres
[ ] Não pode conter imagem e vídeo ao mesmo tempo

## Deletar Tweet

**RequisitosFuncionais**
[ ] O usuário deve poder deletar qualquer um de seus tweets

**RequisitosNaoFuncionais**
[ ] Se houver alguma resposta para quele tweet, o efeito cascade deverá apenas remover o id

**RegrasNegócio**
[ ] Não pode deletar tweets de outros usuários
[ ] A descrição não pode conter mais de **280** caracteres
[ ] Não pode conter imagem e vídeo ao mesmo tempo
