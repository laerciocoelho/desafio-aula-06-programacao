import { realizarLogin } from "../src/desafioLogin.js";
import assert from 'node:assert';

describe("Teste relacionados a validacao do Login", function () {
    it('Validar mensagem ao realizar login com email e senha válidos', function () {
        //Arrange
        const emailInformado = 'joao@email.com';
        const senhaInformada = 'joao123';
        const mensagemEsperada = 'Login realizado com sucesso!'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com usuário expirado', function () {
        //Arrange
        const emailInformado = 'maria@email.com';
        const senhaInformada = 'maria456';
        const mensagemEsperada = 'Renove suas credenciais.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com senha incorreta', function () {
        //Arrange
        const emailInformado = 'carlos@email.com';
        const senhaInformada = 'carlos7890';
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com email inexistente', function () {
        //Arrange
        const emailInformado = 'carlos2@email.com';
        const senhaInformada = 'carlos7890';
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com email vazio', function () {
        //Arrange
        const emailInformado = '';
        const senhaInformada = 'carlos7890';
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com email nulo', function () {
        //Arrange
        const emailInformado = null;
        const senhaInformada = 'carlos7890';
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com email undefined', function () {
        //Arrange
        const emailInformado = undefined ;
        const senhaInformada = 'carlos7890';
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com senha undefined', function () {
        //Arrange
        const emailInformado = 'carlos@email.com' ;
        const senhaInformada = undefined;
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })

    it('Validar mensagem ao realizar login com senha nula', function () {
        //Arrange
        const emailInformado = 'carlos@email.com' ;
        const senhaInformada = null ;
        const mensagemEsperada = 'Credencial incorreta.'

        //Act
        const mensagemRecebido = realizarLogin(emailInformado, senhaInformada);

        //Assert
        assert.equal(mensagemRecebido, mensagemEsperada);
    })
})