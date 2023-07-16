using System;
using System.Collections.Generic;

namespace PROYECTO_PERSONAL.Models;

public partial class Solicitud : EntidadAuditoria
{

    public string Nombre { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Mensaje { get; set; } = null!;

    public string Esolicitud { get; set; } = null!;

}
