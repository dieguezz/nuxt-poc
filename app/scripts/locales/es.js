(function() {

  var locales = {
    'nav': {
      'home': 'inicio',
      'company': 'empresa',
      'people': 'equipo',
      'contact': 'contacto'
    },
    'cookies': {
      'bar': 'Usamos cookies para asegurarte la mejor experiencia en nuestra web.<a href="/privacy-policy#cookies" class="link white" target="_blank">Conoce más</a>'
    },
    'footer': {
      'contact': 'Nuevo Proyecto',
      'privacy': 'Política de Privacidad',
      'cookies': 'Política de Cookies'
    },
    'pre-footer': {
      'title': '¿Te gusta lo que ves?<br>¡Tomemos un café!',
      'contact': 'Contacta con nosotros',
      'cookies': 'Política de Cookies'
    },
    'home': {
      'slide0': {
        'title': 'Somos Etéreo',
        'subtitle': 'Una agencia de producto digital diferente',
        'link': 'Cónocenos'
      },
      'slide1': {
        'title': 'Emparejando personas y empresas',
        'home.soon': 'Caso de estudio Próximamente'
      },
      'slide2': {
        'title': 'Dispara tu rendimiento hoy',
        'home.soon': 'Caso de estudio Próximamente'
      },
      'slide3': {
        'title': 'Una (R)evolución digital centenaria',
        'home.soon': 'Caso de estudio Próximamente'
      }
    },
    'company': {
      'nav': {
        'start': 'Inicio',
        'about': 'Sobre nosotros',
        'what': 'Qué hacemos',
        'how': 'Cómo lo hacemos',
        'friends': 'Algunos amigos'
      },
      'start': {
        'title': 'De personas digitales para personas con ideas digitales.',
        'subtitle': 'People First.'
      },
      'about': {
        'title': 'Experiencias resonadoras con valor duradero.',
        'subtitle': 'Etéreo es una agencia de productos digitales ubicada en Madrid, que trabaja con clientes de todo el mundo. Con un equipo de expertos en todas las áreas, desde conceptualización, diseño y tecnología, potenciamos a las empresas a dar el salto digital.<br><br>Te ayudamos a construir productos digitales y experiencias de vanguardia con un valor duradero.'
      },
      'services': {
        'title': 'Combinando estrategia, diseño y desarrollo para revelar la esencia de tus ideas.',
        'service0': {
          'title': 'Estrategia',
          'subtitle': 'Partiendo de tu idea, te ayudaremos a definir la forma y meta que queremos alcanzar. Habiendo elegido la mejor solución creativa y tecnológica, proporcionamos un producto estable con un valor duradero.'
        },
        'service1': {
          'title': 'Diseño',
          'subtitle': 'Proporcionar un diseño intuitivo es esencial para la funcionalidad de tu producto y lo que quieres transmitir al mundo. Nos encanta la sencillez del diseño que deleita al usuario.'
        },
        'service2': {
          'title': 'Tecnología',
          'subtitle': 'Con un equipo de expertos ingenieros de software, creamos productos escalables utilizando las últimas tecnologías. Nos involucramos profundamente en su proyecto y ofrecemos experiencias sobresalientes.'
        }
      },
      'how': {
        'title': 'Involucrándonos profundamente en el desarrollo y proceso creativo.',
        'how0': {
          'title': 'Concepto',
          'subtitle': 'Nos sumergimos en la planificación de necesidades, objetivos y resultados deseados; Hacemos de sus sueños y metas, realidades.'
        },
        'how1': {
          'title': 'Creación',
          'subtitle': 'Después de encontrar la mejor solución, tenemos el expertise necesario para crear la mejor versión posible de su producto, siempre dejando que guíes nuestras decisiones.'
        },
        'how2': {
          'title': 'Excelencia',
          'subtitle': 'Nuestra filosofía de trabajo nos hace participar plenamente en cada proyecto que desarrollamos. Estamos orgullosos de nuestro trabajo y siempre comprometidos con la excelencia.'
        }
      },
      'friends': {
        'title': 'Compartiendo conocimiento con nuestros colaboradores y amigos.'
      }
    },
    'people': {
      'dna': 'Descubre nuestro ADN',
      'nav': {
        'start': 'Inicio',
        'about': 'Sobre nosotros',
        'values': 'Lo que creemos',
        'people': 'Los Etereotipos',
        'pictures': 'Instagram'
      },
      'start': {
        'title': 'Creemos en el potencial individual eliminando la barrera jerárquica.',
        'subtitle': 'People First.'
      },
      'about': {
        'title': 'Más que ideas brillantes...',
        'subtitle': 'El equipo etéreo tiene una enorme ambición y pasión por crear grandes productos. Somos un grupo de talentos que comparten los mismos valores y puede crear prácticamente cualquier cosa relacionado con la web: diseñadores, ingenieros, creadores, artesanos, programadores y pensadores juntos.<br><br>Trabajamos como socios equitativos, con responsabilidad, con ambición, con excelencia. Nos apartamos de la jerarquía y buscamos el potencial individual. <br> <br> Hagamos algo increíble.'
      },
      'values': {
        'title': 'Los valores que defendemos para alcanzar nuestras metas.',
        'value0': {
          'title': 'Comunidad',
          'subtitle': 'Nos gusta estar con gente que comparte nuestros valores.'
        },
        'value1': {
          'title': 'Libertad',
          'subtitle': 'Queremos controlar nuestro tiempo para poder controlar el tuyo.'
        },
        'value2': {
          'title': 'Competencia',
          'subtitle': 'Queremos aprender e innovar continuamente.'
        },
        'value3': {
          'title': 'Buen Ciudadano',
          'subtitle': 'Corazón antes que cartera (el dinero no es lo principal en la vida).'
        },
        'value4': {
          'title': 'Profesionalidad',
          'subtitle': 'Nos preocupamos por resolver los problemas de nuestros clientes.'
        },
      },
      'people': {
        'title': 'Los etereotipos: estos son los chicos locos que lo hacen posible.',
        'hayder': {
          'title': 'Diseñador Empedernido'
        },
        'ruben': {
          'title': 'Chico Todoterreno'
        },
        'daniel': {
          'title': 'Jóven ingeniero'
        },
        'rafael': {
          'title': 'Programador creativo'
        },
        'ismael': {
          'title': 'Artesano del data'
        },
        'anthanh': {
          'title': 'Desarrollador Ninja'
        },
        'diego': {
          'title': 'Ejército de un Hombre'
        },
        'join': {
          'title': 'Siempre estamos deseosos de conocer gente talentosa.',
          'action': 'ESCRÍBENOS UNAS LÍNEAS'
        }
      },
      'pictures': {
        'title': 'No todo en la vida es trabajar. Este es nuestro equilibrio trabajo-vida!',
        'more': 'Ver más en Instagram'
      }
    },
    'contact': {
      'title': 'Nos encantaría saber de ti.<br>Hagámos rock and roll!',
      'action': {
        'title': 'Es hora de hacer algo grande juntos.',
        'subtitle': 'Empezar un proyecto'
      },
      'contact0': {
        'title': 'General',
        'subtitle': '¿Alguna pregunta, quieres conocernos o solo decir hola? Envíanos un email a:'
      },
      'contact1': {
        'title': 'Empleo',
        'subtitle': 'Siempre estamos deseosos de conocer gente talentosa con la que trabajar.',
        'link': 'Preséntate'
      },
      'contact2': {
        'title': 'Ubicación',
        'subtitle': 'Estamos en Madrid, pero puedes contactarnos en todo el mundo y más allá.',
        'link': '¿Incluso Marte?'
      },
      'marker': 'Nuestra oficina es el mundo, pero este lugar sería acogedor.'
    },
    'new-project': {
      'title': 'Empieza un proyecto con nosotros',
      'name': {
        'title': 'Tu nombre completo...',
        'error': 'Un nombre válido es requerido'
      },
      'company': {
        'title': 'Tu empresa...',
      },
      'email': {
        'title': 'Tu email...',
        'error': 'Un email válido es requerido'
      },
      'phone': {
        'title': 'Tu número de teléfono...',
        'error': 'Un número de teléfono válido es requerido'
      },
      'message': {
        'title': 'Cuéntanos sobre tu proyecto...',
        'error': 'Un mensaje es requerido'
      },
      'extra': {
        'title': '¿Te importaría contestar dos preguntas más? (opcional)',
        'how': {
          'title': '¿Cómo nos conociste?',
        },
        'comments': {
          'title': '¿Qué fue lo que hizo que contactases con nosotros?',
        },
      },
      'send': 'Enviar',
      'sended': {
        'title': '¡Gracias!',
        'subtitle': 'Estamos deseosos de conocerte,<br>te contactaremos lo antes posible.',
        'back': '¡Llévame a casa!'
      }
    }
  };

  // i18njs.add(language, [namespace,] locales);
  i18njs.add('es', locales);

})();
