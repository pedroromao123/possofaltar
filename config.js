// Configuração do servidor (Supabase). Estas chaves são públicas por natureza.
window.PF_CONFIG = {
  SUPABASE_URL: 'https://jmxfrhlbmmrrsrpkvvak.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpteGZyaGxibW1ycnNycGt2dmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NDUzNDgsImV4cCI6MjEwODIyMTM0OH0.GJEqeE9VmpleXVdpTTnX9j3GL6rM8GlKPcyqpkSkW0I',
  VAPID_PUBLIC_KEY: '',
  // Nomes das funções como aparecem no Supabase (o final do endereço de cada uma):
  FN_DAILY: 'smart-task',   // a função do aviso diário
  FN_MARCAR: 'marcar'       // TROQUE pelo nome da função "marcar" quando você criar/ver o nome dela
};
