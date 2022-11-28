function introduction(Name){return(`Hi, my name is ${Name}.`);}

introduction(Aki);


function introductionWithLanguage(Name, Language){
    return (`Hi, my name is ${Name} and I am learning to program in ${Language}.`);
  }
introductionWithLanguage(Aki,Javascript);


  function introductionWithLanguageOptional(name, language = "JavaScript"){ return (`Hi, my name is ${name} and I am learning to program in ${language}.`);}

  introductionWithLanguageOptional("Gracie");

