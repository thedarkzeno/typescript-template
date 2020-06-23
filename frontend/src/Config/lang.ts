interface ILang {
  name: string;
  values: {
    header: {
      howItWorks: string;
      solutions: string;
      enterprise: string;
      login: string;
    };
  };
}

export const Pt: ILang = {
  name: "Português",
  values: {
    header: {
      howItWorks: "COMO FUNCIONA",
      solutions: "SOLUÇÕES",
      enterprise: "EMPRESAS",
      login: "ENTRAR",
    },
  },
};
