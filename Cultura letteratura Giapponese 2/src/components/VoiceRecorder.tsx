import { useRef, useState } from 'react'

export function VoiceRecorder() {
  const [status,setStatus]=useState<'idle'|'recording'|'ready'|'unavailable'>('idle')
  const [url,setUrl]=useState<string|null>(null)
  const recorder=useRef<MediaRecorder|null>(null)
  const chunks=useRef<Blob[]>([])
  const start=async()=>{if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){setStatus('unavailable');return}try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});chunks.current=[];recorder.current=new MediaRecorder(stream);recorder.current.ondataavailable=(event)=>chunks.current.push(event.data);recorder.current.onstop=()=>{const next=URL.createObjectURL(new Blob(chunks.current,{type:'audio/webm'}));if(url)URL.revokeObjectURL(url);setUrl(next);stream.getTracks().forEach((track)=>track.stop());setStatus('ready')};recorder.current.start();setStatus('recording')}catch{setStatus('unavailable')}}
  const stop=()=>recorder.current?.stop()
  return <div className="voice-recorder"><div><span className={status==='recording'?'pulse':''}>●</span><p><strong>{status==='recording'?'Registrazione in corso':status==='ready'?'Registrazione pronta':'Prova la tua voce'}</strong><small>L’audio resta nel browser e non viene inviato.</small></p></div>{status==='idle'&&<button onClick={start}>Registra</button>}{status==='recording'&&<button onClick={stop}>Ferma</button>}{status==='ready'&&<><audio controls src={url??undefined}/><button onClick={start}>Rifai</button></>}{status==='unavailable'&&<small>Microfono non disponibile o permesso non concesso.</small>}</div>
}
