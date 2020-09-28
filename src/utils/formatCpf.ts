export default function getFormatCpf(data: string): string {
  const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
  let cpf = data;

  if (cpfValido.test(cpf) === false) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length === 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      return cpf;
    }
  }
  return 'CPF inválido';
}
