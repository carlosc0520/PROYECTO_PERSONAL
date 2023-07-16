using System;
using System.Collections.Generic;

namespace PROYECTO_PERSONAL.Models;

public partial class Proyecto : EntidadAuditoria
{

    public string? Nombre { get; set; }

    public string? Descripcion { get; set; }

    public string? Tecnologias { get; set; }

    public string? Link { get; set; }

    public DateTime? Fcreacion { get; set; }

}
