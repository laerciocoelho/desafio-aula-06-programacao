const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: 'joao123',
        expirado: false,
    },
    {
        id: 2,
        nome: 'Maria Souza',
        email: 'maria@email.com',
        senha: 'maria456',
        expirado: true,
    },
    {
        id: 3,
        nome: 'Carlos Lima',
        email: 'carlos@email.com',
        senha: 'carlos789',
        expirado: false,
    },
    {
        id: 4,
        nome: 'Ana Costa',
        email: 'ana@email.com',
        senha: 'ana321',
        expirado: true,
    },
    {
        id: 5,
        nome: 'Fernanda Rocha',
        email: 'fernanda@email.com',
        senha: 'fernanda654',
        expirado: false,
    }
];


function verificarEmail(emailInformado) {

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios.at(i).email === emailInformado) {
            return usuarios[i];
        }

    }
}

export function realizarLogin(emailInformado, senhaInformada){
    
    const usuario = verificarEmail(emailInformado);
    
    if(usuario == null || senhaInformada != usuario.senha){
        return 'Credencial incorreta.'
    } else if(senhaInformada == usuario.senha & usuario.expirado == false){
        return 'Login realizado com sucesso!'
    } else if(usuario.expirado == true){
        return 'Renove suas credenciais.'
    };

}