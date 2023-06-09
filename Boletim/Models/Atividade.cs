using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Boletim.Models
{
    public class Atividade
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Descricao { get; set; }
        public DateTime DataHora { get; set; }
        public string? Local { get; set; }
        public string? Preletor { get; set; }
        public string? Banda { get; set; }
        public string? SociedadeInterna { get; set; }
    }
}