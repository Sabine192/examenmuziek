
    $(document).ready(function() {
        // Regel om jQuery Validate toe te passen op het contactformulier
        $('#contactform').validate({
            rules: {
                voornaam: {
                    required: true,
                    minlength: 2
                },
                achternaam: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                land: {
                    required: true
                },
                bericht: {
                    required: true,
                    maxlength: 1500
                }
            },
            messages: {
                voornaam: {
                    required: "Vul uw voornaam in.",
                    minlength: "Uw voornaam moet minimaal 2 karakters lang zijn."
                },
                achternaam: {
                    required: "Vul uw achternaam in.",
                    minlength: "Uw achternaam moet minimaal 2 karakters lang zijn."
                },
                email: {
                    required: "Vul uw e-mailadres in.",
                    email: "Vul een geldig e-mailadres in."
                },
                land: {
                    required: "Selecteer uw land."
                },
                bericht: {
                    required: "Schrijf uw bericht.",
                    maxlength: "Uw bericht mag maximaal 1500 karakters bevatten."
                }
            },
            submitHandler: function(form) {
                // form.submit(); // Als je het formulier normaal wilt verzenden
            }
        });
    });
