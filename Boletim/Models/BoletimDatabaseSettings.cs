using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boletim.Models
{
    public class BoletimDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string AtividadesCollectionName { get; set; } = null!;
    }
}