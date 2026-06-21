(function () {
  "use strict";

  var defaults = {
    brandName: "LN Contabilidade",
    responsible: "Nilton Lúcio de Almeida Neto",
    whatsapp: "",
    phone: "",
    emailPrimary: "nilton@lncontabilidade.com",
    emailSecondary: "leonardo@lncontabilidade.com",
    instagramHandle: "@contabilidadeln",
    instagramUrl: "https://www.instagram.com/contabilidadeln/",
    city: "",
    address: "",
    domain: "",
    defaultMessage: "Olá, Nilton. Conheci a LN Contabilidade pelo site e gostaria de conversar sobre minha empresa."
  };

  var config = Object.assign({}, defaults, window.LN_SITE_CONFIG || {});
  var whatsappDigits = String(config.whatsapp || "").replace(/\D/g, "");
  var hasWhatsApp = whatsappDigits.length >= 10 && whatsappDigits.length <= 15;

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      if (value) {
        element.textContent = value;
        element.hidden = false;
      }
    });
  }

  setText('[data-config-text="emailPrimary"]', config.emailPrimary);
  setText('[data-config-text="emailSecondary"]', config.emailSecondary);
  setText('[data-config-text="instagramHandle"]', config.instagramHandle);
  setText('[data-current-year]', String(new Date().getFullYear()));

  document.querySelectorAll('[data-email-link="primary"]').forEach(function (link) {
    if (config.emailPrimary) link.href = "mailto:" + config.emailPrimary;
  });

  document.querySelectorAll('[data-email-link="secondary"]').forEach(function (link) {
    if (config.emailSecondary) link.href = "mailto:" + config.emailSecondary;
  });

  document.querySelectorAll('[data-instagram-link]').forEach(function (link) {
    if (config.instagramUrl) link.href = config.instagramUrl;
  });

  if (hasWhatsApp) {
    var directMessage = encodeURIComponent(config.defaultMessage);
    var directUrl = "https://wa.me/" + whatsappDigits + "?text=" + directMessage;
    document.querySelectorAll('[data-contact-link]').forEach(function (link) {
      link.href = directUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  var mobileContact = document.querySelector('.mobile-contact');
  var footer = document.querySelector('.site-footer');
  if (mobileContact) {
    var updateMobileContact = function () {
      var footerIsNear = footer && footer.getBoundingClientRect().top < window.innerHeight + 40;
      var shouldShow = window.scrollY > 520 && !footerIsNear;
      mobileContact.classList.toggle('is-visible', shouldShow);
    };
    updateMobileContact();
    window.addEventListener('scroll', updateMobileContact, { passive: true });
    window.addEventListener('resize', updateMobileContact);
  }

  document.querySelectorAll('.mobile-nav nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      var menu = link.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });

  var phoneInput = document.getElementById('whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var digits = phoneInput.value.replace(/\D/g, '').slice(0, 11);
      var formatted = digits;
      if (digits.length > 2) formatted = '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
      if (digits.length > 7) formatted = '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7);
      if (digits.length > 10) formatted = '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7, 11);
      phoneInput.value = formatted;
    });
  }

  var form = document.getElementById('lead-form');
  if (!form) return;

  var fields = {
    nome: document.getElementById('nome'),
    empresa: document.getElementById('empresa'),
    whatsapp: document.getElementById('whatsapp'),
    faturamento: document.getElementById('faturamento'),
    necessidade: document.getElementById('necessidade'),
    contexto: document.getElementById('contexto'),
    consentimento: document.getElementById('consentimento')
  };

  var status = document.getElementById('form-status');

  function errorElement(name) {
    return document.getElementById(name + '-error');
  }

  function clearError(name) {
    var field = fields[name];
    var message = errorElement(name);
    if (field) field.removeAttribute('aria-invalid');
    if (message) message.textContent = '';
  }

  function setError(name, text) {
    var field = fields[name];
    var message = errorElement(name);
    if (field) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', name + '-error');
    }
    if (message) message.textContent = text;
  }

  function validate() {
    Object.keys(fields).forEach(clearError);
    var firstInvalid = null;

    function fail(name, message) {
      setError(name, message);
      if (!firstInvalid) firstInvalid = fields[name];
    }

    if (!fields.nome.value.trim() || fields.nome.value.trim().length < 2) {
      fail('nome', 'Informe seu nome.');
    }
    if (!fields.empresa.value.trim() || fields.empresa.value.trim().length < 2) {
      fail('empresa', 'Informe o nome da empresa.');
    }
    var contactDigits = fields.whatsapp.value.replace(/\D/g, '');
    if (contactDigits.length < 10) {
      fail('whatsapp', 'Informe um telefone com DDD.');
    }
    if (!fields.faturamento.value) {
      fail('faturamento', 'Selecione uma faixa de faturamento.');
    }
    if (!fields.necessidade.value) {
      fail('necessidade', 'Selecione a principal necessidade.');
    }
    if (!fields.consentimento.checked) {
      fail('consentimento', 'Confirme a autorização para retorno do contato.');
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return false;
    }
    return true;
  }

  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    if (!field) return;
    field.addEventListener(field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input', function () {
      clearError(name);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = '';
    status.removeAttribute('data-state');

    if (!validate()) {
      status.textContent = 'Revise os campos indicados antes de enviar.';
      status.setAttribute('data-state', 'error');
      return;
    }

    var lines = [
      config.defaultMessage,
      '',
      'Nome: ' + fields.nome.value.trim(),
      'Empresa: ' + fields.empresa.value.trim(),
      'WhatsApp: ' + fields.whatsapp.value.trim(),
      'Faturamento aproximado: ' + fields.faturamento.value,
      'Principal necessidade: ' + fields.necessidade.value
    ];

    if (fields.contexto.value.trim()) {
      lines.push('Contexto: ' + fields.contexto.value.trim());
    }

    var message = lines.join('\n');

    if (hasWhatsApp) {
      var url = 'https://wa.me/' + whatsappDigits + '?text=' + encodeURIComponent(message);
      var opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened) window.location.href = url;
      status.textContent = 'Mensagem preparada. O WhatsApp foi aberto em uma nova janela.';
      status.setAttribute('data-state', 'success');
      return;
    }

    var destination = config.emailPrimary || defaults.emailPrimary;
    var subject = 'Contato pelo site | ' + fields.empresa.value.trim();
    var mailto = 'mailto:' + encodeURIComponent(destination) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
    status.textContent = 'O WhatsApp ainda não está configurado. Seu aplicativo de e-mail será aberto para concluir o contato.';
    status.setAttribute('data-state', 'success');
    window.location.href = mailto;
  });
})();
