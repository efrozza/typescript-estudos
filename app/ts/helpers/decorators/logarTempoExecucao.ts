// Esse decorator devolve o tempo de execução dos metodos que serão decorados por ele

export function logarTempoExecucao(emSegundos: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value;

    // o parametro descriptor devolve todo o metodo atraves do parametro value
    descriptor.value = function(...args: any[]) {
      let unidade = 'ms';
      let divisor = 1;

      if (emSegundos) {
        unidade = 's';
        divisor = 1000;
      }
      console.log('-----------------');
      console.log(
        `parametros passados para o metodo ${propertyKey}: ${JSON.stringify(
          args,
        )}`,
      );
      const t1 = performance.now();
      // aqui executamos o metodo original
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `o retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`,
      );
      console.log(
        `o metodo ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`,
      );
      return retorno;
    };
    return descriptor;
  };
}
