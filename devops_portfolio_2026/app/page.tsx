import HeroCanvas from '@/components/3d/HeroCanvas';
import Terminal from '@/components/ui/Terminal';
import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Server, Cpu, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroCanvas />
      
      <section className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
            SYSTEM STATUS: OPERATIONAL [AWS-US-EAST-1]
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-tight">
            DEPLOY. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              SCALE.
            </span><br/>
            SECURE.
          </h1>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-light">
            Platform Engineer specializing in Kubernetes, Terraform, and high-frequency 
            CI/CD automation for Tier-1 engineering teams.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
              View Architecture
            </Button>
            <div className="flex gap-6 items-center ml-4">
              <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[500px] h-[400px]">
          <Terminal />
        </div>
      </section>

      {/* Skills / Tech Section Placeholder */}
      <section className="py-20 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Cloud Platforms', value: 'AWS / GCP / Azure', icon: Globe },
             { label: 'Orchestration', value: 'Kubernetes / EKS', icon: Server },
             { label: 'IaC', value: 'Terraform / Ansible', icon: Cpu },
             { label: 'Automation', value: 'GitHub Actions / ArgoCD', icon: Globe },
           ].map((item, i) => (
             <div key={i} className="space-y-2">
               <item.icon className="text-cyan-500 w-5 h-5" />
               <h3 className="text-gray-400 text-xs uppercase tracking-widest">{item.label}</h3>
               <p className="text-white font-bold">{item.value}</p>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}