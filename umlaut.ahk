; Made by Jakub Mańczak in 2020
; manczak.net

!a::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00E4}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00C4}
return

!+a::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00C4}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00E4}
return

!o::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00F6}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00D6}
return

!+o::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00D6}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00F6}
return

!u::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00FC}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00DC}
return

!+u::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00DC}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00FC}
return

!s::
if GetKeyState("CapsLock", "T") = 0
	send, {U+00DF}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+1E9E}
return

!+s::
if GetKeyState("CapsLock", "T") = 0
	send, {U+1E9E}
else if GetKeyState("CapsLock", "T") = 1
	send, {U+00DF}

!Esc::
   Suspend, Permit
   SusToggle := !SusToggle
   If (SusToggle)
   {   Suspend, On
   }
   Else
   {   Suspend Off
   }
   Return

return
