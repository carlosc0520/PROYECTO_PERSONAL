using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PROYECTO_PERSONAL.Models;

public partial class ProyectoPersonalContext : DbContext
{
    public ProyectoPersonalContext()
    {
    }

    public ProyectoPersonalContext(DbContextOptions<ProyectoPersonalContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Proyecto> Proyectos { get; set; }

    public virtual DbSet<Solicitud> Solicitudes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=SQL8002.site4now.net;Initial Catalog=db_a9c576_dbproyecto;User Id=db_a9c576_dbproyecto_admin;Password=x975p83s_-eDmcK");
    //=> optionsBuilder.UseSqlServer("Server=DESKTOP-JVH12V7\\SQLEXPRESS;Database=PROYECTO_PERSONAL;Trusted_Connection=True;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Proyecto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PROYECTO__3214EC2774C4EE66");

            entity.ToTable("PROYECTOS");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(15, 0)")
                .HasColumnName("ID");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("DESCRIPCION");
            entity.Property(e => e.Fcreacion)
                .HasColumnType("date")
                .HasColumnName("FCREACION");
            entity.Property(e => e.Fregistro)
                .HasColumnType("datetime")
                .HasColumnName("FREGISTRO");
            entity.Property(e => e.Link)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("LINK");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("NOMBRE");
            entity.Property(e => e.Tecnologias)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("TECNOLOGIAS");
        });

        modelBuilder.Entity<Solicitud>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SOLICITU__3214EC27CD87C75D");

            entity.ToTable("SOLICITUDES");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(15, 0)")
                .HasColumnName("ID");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("EMAIL");
            entity.Property(e => e.Esolicitud)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("ESOLICITUD");
            entity.Property(e => e.Fregistro)
                .HasColumnType("datetime")
                .HasColumnName("FREGISTRO");
            entity.Property(e => e.Mensaje)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("MENSAJE");
            entity.Property(e => e.Nombre)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("NOMBRE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
